export default function DashboardLayout({
    children,
    revenue,
    notification,
    analytics
}: {
    children : React.ReactNode
    revenue : React.ReactNode
    notification : React.ReactNode
    analytics : React.ReactNode
}){
  return  (
    <div>
    <h1>{children}</h1>
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{revenue}</div>
        <div>{analytics}</div>
      </div>
      <div style={{ display: "flex", flex: 1 }}>{notification}</div>
    </div>
  </div>
   )

}