import './globals.css';
import Header from '@/component/Header/Header';
import Footer from '@/component/Footer/Footer';
import { AuthProvider } from '@/context/AuthContext';
import { CardProvider } from '@/context/CardContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <title>E-Commerce</title>
      </head>
      <body>
        <AuthProvider>
          <CardProvider>
            <Header />
            {children}
            <Footer />
          </CardProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
