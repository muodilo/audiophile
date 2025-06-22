'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCartStore } from '@/store/useCartStore';
import { useRouter } from 'next/navigation';
import useHasHydrated from '@/hooks/useHasHydrated';
import { FaHandshakeAngle } from 'react-icons/fa6';
import { useState } from 'react';
import Image from 'next/image';

const checkoutSchema = z
  .object({
    name: z.string().min(3, 'Name is required'),
    email: z.string().email('Invalid email'),
    phone: z.string().min(8, 'Phone number required'),
    address: z.string().min(5, 'Address required'),
    zip: z.string().min(4, 'ZIP code required'),
    city: z.string().min(2, 'City required'),
    country: z.string().min(2, 'Country required'),
    payment: z.enum(['e-money', 'cash-on-delivery']),
    eMoneyNumber: z.string().optional(),
    eMoneyPin: z.string().optional(),
  })
  .superRefine((val, ctx) => {
    if (val.payment === 'e-money') {
      if (!val.eMoneyNumber || val.eMoneyNumber.length < 6) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'e-Money number required',
        });
      }
      if (!val.eMoneyPin || val.eMoneyPin.length < 4) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'e-Money PIN required',
        });
      }
    }
  });

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const hydrated = useHasHydrated();
  const router   = useRouter();

  const { items, clear, subtotal } = useCartStore();

  const [isModalOpen,      setModalOpen]      = useState(false);
  const [orderItems,       setOrderItems]     = useState<typeof items>([]);
  const [orderGrandTotal,  setOrderGrand]     = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CheckoutFormData>({
    resolver     : zodResolver(checkoutSchema),
    defaultValues: { payment: 'e-money' },
  });

  const shipping   = items.length ? 50 : 0;
  const vat        = subtotal() * 0.2;
  const grandTotal = subtotal() + shipping + vat;

  const onSubmit = (data: CheckoutFormData) => {
    if (!items.length) return;         
    setOrderItems([...items]);          
    setOrderGrand(grandTotal);
    setModalOpen(true);
    clear();
    console.log('ORDER', { data, items, totals: { subtotal: subtotal(), shipping, vat, grandTotal } });
  };

  const showEMoney = watch('payment') === 'e-money';

  if (!hydrated) return null;

  return (
    <section className="bg-[#fafafa] px-5 lg:px-52 py-12 relative">

      <form onSubmit={handleSubmit(onSubmit)} className="grid lg:grid-cols-[2fr_1fr] gap-8">

        <div className="bg-white p-8 rounded-lg space-y-8 shadow-sm">
          <h1 className="text-2xl font-bold uppercase tracking-wider">Checkout</h1>

          <fieldset className="space-y-4">
            <legend className="text-[#d87d4a] font-semibold mb-2">Billing Details</legend>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Name"
                placeholder="Alexei Ward"
                error={errors.name?.message}
                {...register('name')}
              />
              <Input
                label="Email Address"
                placeholder="alexei@mail.com"
                error={errors.email?.message}
                {...register('email')}
              />
              <Input
                label="Phone Number"
                placeholder="+1 202-555-0136"
                error={errors.phone?.message}
                {...register('phone')}
              />
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-[#d87d4a] font-semibold mb-2">Shipping Info</legend>
            <Input
              label="Your Address"
              placeholder="1137 Williams Avenue"
              error={errors.address?.message}
              {...register('address')}
            />
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="ZIP Code" placeholder="10001" error={errors.zip?.message} {...register('zip')} />
              <Input label="City" placeholder="New York" error={errors.city?.message} {...register('city')} />
              <Input
                label="Country"
                placeholder="United States"
                error={errors.country?.message}
                {...register('country')}
              />
            </div>
          </fieldset>

          {/* Payment */}
          <fieldset className="space-y-4">
            <div>
              <div className="grid md:grid-cols-2">
                <div>
                  <legend className="text-[#d87d4a] font-semibold mb-2 md:col-span-2">Payment Details</legend>
                  <label className="text-sm font-semibold">Payment Method</label>
                </div>
                <div className="space-y-2">
                  <Radio id="e-money" label="e-Money" value="e-money" {...register('payment')} />
                  <Radio id="cash"   label="Cash on Delivery" value="cash-on-delivery" {...register('payment')} />
                </div>
              </div>

              {showEMoney ? (
                <div className="grid md:grid-cols-2 gap-5 mt-5">
                  <Input
                    label="e-Money Number"
                    placeholder="238521993"
                    error={errors.eMoneyNumber?.message}
                    {...register('eMoneyNumber')}
                  />
                  <Input
                    label="e-Money PIN"
                    placeholder="6891"
                    error={errors.eMoneyPin?.message}
                    {...register('eMoneyPin')}
                  />
                </div>
              ) : (
                <div className="mt-5 grid grid-cols-9 gap-3">
                  <div className="flex items-center justify-center">
                    <FaHandshakeAngle className="text-4xl text-[#d87d4a]" />
                  </div>
                  <p className="col-span-8 text-neutral-500">
                    The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your
                    residence. Just make sure your address is correct so that your order will not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </fieldset>
        </div>

        <aside className="bg-white p-8 rounded-lg shadow-sm space-y-6 h-max">
          <h2 className="text-lg font-bold uppercase">Summary</h2>

          {items.length ? (
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Image width={50} height={50} src={item.image} alt={item.name} className="w-14 h-14 rounded" />
                    <div>
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-neutral-500">$ {item.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold">x{item.qty}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-neutral-500">Your cart is empty.</p>
          )}

          <SummaryRow label="Total"            value={subtotal()} />
          <SummaryRow label="Shipping"         value={shipping} />
          <SummaryRow label="VAT (Included)"   value={vat} />
          <SummaryRow label="Grand Total"      value={grandTotal} highlight />

          <button
            type="submit"
            disabled={!items.length}
            className={`w-full py-3 uppercase tracking-wider rounded transition
              ${items.length
                ? 'bg-[#d87d4a] hover:bg-[#fbaf85] text-white'
                : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'}
            `}
          >
            Continue &amp; Pay
          </button>
        </aside>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-lg ">
            <div className=" mb-4">
              <div className="bg-[#d87d4a] w-15 h-15 rounded-full p-3 text-white text-2xl flex items-center justify-center">✓</div>
            </div>
            <h2 className="text-3xl font-bold mb-2">THANK YOU <br /> FOR YOUR ORDER</h2>
            <p className="text-gray-600 mb-6">You will receive an email confirmation shortly.</p>

           

            <div className='grid grid-cols-3 mb-5'>

            {orderItems[0] && (
              <div className="bg-[#f1f1f1] p-4 rounded-tl-xl rounded-bl-xl flex justify-between items-center col-span-2">
                <div className="flex items-center gap-4">
                  <Image width={50} height={50} src={orderItems[0].image} alt={orderItems[0].name} className="w-12 h-12" />
                  <div className="text-left">
                    <p className="font-medium text-sm">{orderItems[0].name}</p>
                    <p className="text-xs text-neutral-500">$ {orderItems[0].price.toLocaleString()}</p>
                  </div>
                </div>
                <span className="font-semibold text-sm">x{orderItems[0].qty}</span>
              </div>
            )}

            <div className="bg-black text-white py-4 px-6 rounded-tr-xl rounded-br-xl text-left">
              <p className="uppercase text-sm opacity-70">Grand Total</p>
              <p className="font-bold text-lg">$ {orderGrandTotal.toLocaleString()}</p>
            </div>
            </div>

            <button
              onClick={() => {
                setModalOpen(false);
                router.push('/');
              }}
              className="bg-[#d87d4a] hover:bg-[#fbaf85] w-full  text-white py-3 px-6 rounded uppercase tracking-wide"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </section>
  );
}



interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
const Input = ({ label, error, placeholder, ...rest }: InputProps) => (
  <div className="flex flex-col gap-1 w-full">
    <div className="flex justify-between">
      <label className="text-xs font-semibold uppercase tracking-wide">{label}</label>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
    <input
      {...rest}
      placeholder={placeholder || label}
      className={`border px-4 py-3 rounded outline-none focus:ring-2 focus:ring-[#d87d4a] ${
        error ? 'border-red-500' : 'border-neutral-300'
      }`}
    />
  </div>
);

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}
const Radio = ({ id, label, ...rest }: RadioProps) => (
  <label className="flex items-center gap-3 cursor-pointer border px-4 py-3 rounded">
    <input type="radio" id={id} className="accent-[#d87d4a]" {...rest} />
    <span className="text-sm font-medium capitalize">{label}</span>
  </label>
);

const SummaryRow = ({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: number;
  highlight?: boolean;
}) => (
  <div className="flex justify-between">
    <p className="text-neutral-500 text-sm uppercase tracking-widest">{label}</p>
    <p className={`font-bold ${highlight ? 'text-[#d87d4a]' : ''}`}>$ {value.toLocaleString()}</p>
  </div>
);
