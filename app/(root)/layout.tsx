// for all figma layouts with a sidebar
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        SIDEBAR
        {children} 
    </main>
  );
}
