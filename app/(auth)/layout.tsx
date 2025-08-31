// for all figma layouts without a sidebar
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        {children} 
    </main>
  );
}
