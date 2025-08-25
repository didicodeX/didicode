import { CreditCard, Zap, Shield } from "lucide-react";

export default function Expertise() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">
            Fintech Expertise
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl">
            Everything you need to build payment platforms
          </p>
          <p className="mt-6 text-lg leading-8 text-secondary-600 dark:text-secondary-100">
            From Stripe integration to multi-currency support, I handle the
            complex parts so you can focus on your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary-900 dark:text-secondary-100">
                <CreditCard className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400" />
                Payment Processing
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-600 dark:text-secondary-400">
                <p className="flex-auto">
                  Stripe Checkout, Connect, and Subscriptions. Multi-currency
                  support with real-time conversion rates and webhook
                  reconciliation.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary-900 dark:text-secondary-100">
                <Zap className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400" />
                SaaS Architecture
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-600 dark:text-secondary-400">
                <p className="flex-auto">
                  Scalable SaaS platforms with subscription management, user
                  onboarding, and automated billing workflows.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary-900 dark:text-secondary-100">
                <Shield className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400" />
                Security & Compliance
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-600 dark:text-secondary-400">
                <p className="flex-auto">
                  PCI DSS compliant payment flows, secure webhook handling, and
                  audit-ready transaction logging.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
