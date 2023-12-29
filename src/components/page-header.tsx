export interface PageHeaderProps {
  children: React.ReactNode
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  ...extra
}) => {
  return (
    <div className="grid-container">
      <div className="col-span-full pt-8 pb-10">
        <h2 className="text-buen-3xl">{children}</h2>
      </div>
    </div>
  )
}

export default PageHeader
