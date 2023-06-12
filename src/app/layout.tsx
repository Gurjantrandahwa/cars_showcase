import './globals.css'




export const metadata = {
  title: 'Cars Showcase',
  description: 'Discover, book, and embark on unforgettable adventures with our premier car showcase.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"relative"}>{children}</body>
    </html>
  )
}
