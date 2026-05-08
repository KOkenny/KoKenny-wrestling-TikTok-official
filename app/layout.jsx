export const metadata = {
  title: "k.o.kenny.o",
  description: "Wrestling creator platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
