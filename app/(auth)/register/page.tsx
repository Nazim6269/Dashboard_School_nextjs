'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const schema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    role: z.enum(['student', 'teacher', 'parent'], {
      required_error: 'Please select a role',
    }),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type FormData = z.infer<typeof schema>;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const selectedRole = watch('role');

  const onSubmit = async (data: FormData) => {
    setServerError('');
    setSuccess(false);

    // Simulated registration — replace with real auth logic
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSuccess(true);
    setTimeout(() => {
      router.push('/login');
    }, 1500);
  };

  return (
    <div className="space-y-5">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
        <p className="text-sm text-gray-500 mt-1">Register for a new account</p>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
          {serverError}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-600 text-sm px-4 py-3 rounded-lg">
          Account created successfully! Redirecting to login...
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-500">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="ring-[1.5px] ring-gray-300 p-2.5 rounded-lg text-sm w-full focus:outline-none focus:ring-blue-400 transition-colors"
            {...register('name')}
          />
          {errors.name && (
            <p className="text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-500">Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="ring-[1.5px] ring-gray-300 p-2.5 rounded-lg text-sm w-full focus:outline-none focus:ring-blue-400 transition-colors"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-500">Phone Number</label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="ring-[1.5px] ring-gray-300 p-2.5 rounded-lg text-sm w-full focus:outline-none focus:ring-blue-400 transition-colors"
            {...register('phone')}
          />
          {errors.phone && (
            <p className="text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>

        {/* Role */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-500">I am a</label>
          <div className="grid grid-cols-3 gap-2">
            {(['student', 'teacher', 'parent'] as const).map((role) => (
              <label
                key={role}
                className={`flex flex-col items-center gap-1.5 border-2 rounded-lg p-3 cursor-pointer transition-all text-center ${
                  selectedRole === role
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-500'
                }`}
              >
                <input
                  type="radio"
                  value={role}
                  className="sr-only"
                  {...register('role')}
                />
                <span className="text-xl">
                  {role === 'student' ? '🎓' : role === 'teacher' ? '👩‍🏫' : '👨‍👩‍👧'}
                </span>
                <span className="text-xs font-medium capitalize">{role}</span>
              </label>
            ))}
          </div>
          {errors.role && (
            <p className="text-xs text-red-400">{errors.role.message}</p>
          )}
        </div>

        {/* Conditional fields based on role */}
        {selectedRole === 'student' && (
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500">Student ID</label>
            <input
              type="text"
              placeholder="e.g. STU-2024-001"
              className="ring-[1.5px] ring-gray-300 p-2.5 rounded-lg text-sm w-full focus:outline-none focus:ring-blue-400 transition-colors"
            />
          </div>
        )}

        {selectedRole === 'teacher' && (
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500">Employee ID</label>
            <input
              type="text"
              placeholder="e.g. EMP-2024-001"
              className="ring-[1.5px] ring-gray-300 p-2.5 rounded-lg text-sm w-full focus:outline-none focus:ring-blue-400 transition-colors"
            />
          </div>
        )}

        {selectedRole === 'parent' && (
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500">Child&apos;s Student ID</label>
            <input
              type="text"
              placeholder="e.g. STU-2024-001"
              className="ring-[1.5px] ring-gray-300 p-2.5 rounded-lg text-sm w-full focus:outline-none focus:ring-blue-400 transition-colors"
            />
          </div>
        )}

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-500">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Min. 6 characters"
              className="ring-[1.5px] ring-gray-300 p-2.5 rounded-lg text-sm w-full focus:outline-none focus:ring-blue-400 transition-colors pr-10"
              {...register('password')}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
            >
              {showPassword ? '🙈' : '👁'}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-400">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-500">Confirm Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Re-enter your password"
            className="ring-[1.5px] ring-gray-300 p-2.5 rounded-lg text-sm w-full focus:outline-none focus:ring-blue-400 transition-colors"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-red-400">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2 text-sm text-gray-500">
          <input type="checkbox" className="mt-0.5 rounded" required />
          <span>
            I agree to the{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </span>
        </label>

        <button
          type="submit"
          disabled={isSubmitting || success}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Creating Account...' : success ? 'Account Created!' : 'Create Account'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-600 font-semibold hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Register;
