import './mypage.css'
import MypageSide from './components/MypageSide'
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mypage-layout layout-width">
      <MypageSide />
      <section className="mypage-content">{children}</section>
    </div>
  )
}
