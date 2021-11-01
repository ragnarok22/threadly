import { BaseLayout } from "./base"

export const NavBarLayout = ({ children, className }) => {
  return (
    <BaseLayout>
      <div className="max-w-7xl h-full mx-auto py-6 sm:px-6 lg:px-8">
        <div className={`flex h-full max-h-full ${className}`}>
          {children}
        </div>
      </div>
    </BaseLayout>
  )
}