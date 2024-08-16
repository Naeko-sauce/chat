

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div className="p-10 bg-green-700">{children}</div>
  
  );
}
