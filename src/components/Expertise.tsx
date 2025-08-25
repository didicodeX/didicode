import { CreditCard, Zap, Shield } from "lucide-react";

export default function Expertise() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-sm sm:text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">
            Fintech Expertise
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100">
            Everything you need to build payment platforms
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-8 text-secondary-600 dark:text-secondary-100">
            From Stripe integration to multi-currency support, I handle the
            complex parts so you can focus on your business.
          </p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 xl:mt-24 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-sm sm:text-base font-semibold leading-7 text-secondary-900 dark:text-secondary-100">
                <CreditCard className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400" />
                Payment Processing
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-sm sm:text-base leading-7 text-secondary-600 dark:text-secondary-100">
                <p className="flex-auto">
                  Stripe Checkout, Connect, and Subscriptions. Multi-currency
                  support with real-time conversion rates and webhook
                  reconciliation.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-sm sm:text-base font-semibold leading-7 text-secondary-900 dark:text-secondary-100">
                <Zap className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400" />
                SaaS Architecture
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-sm sm:text-base leading-7 text-secondary-600 dark:text-secondary-100">
                <p className="flex-auto">
                  Scalable SaaS platforms with subscription management, user
                  onboarding, and automated billing workflows.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-sm sm:text-base font-semibold leading-7 text-secondary-900 dark:text-secondary-100">
                <Shield className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400" />
                Security & Compliance
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-sm sm:text-base leading-7 text-secondary-600 dark:text-secondary-100">
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
