import '../styles/globals.css';
import Header from './Header';
import { PaymentForm } from 'react-square-web-payments-sdk';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
