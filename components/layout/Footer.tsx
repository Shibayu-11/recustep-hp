import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link 
              href="/" 
              className="flex items-center"
            >
              <img 
                src="/images/logo/logo.png" 
                alt="リクステップ" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              HP/LP制作、システム開発、Artbloom、採用業務の一括依頼、面接代行サービスを提供しています。
            </p>
            <div className="mt-6 flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold">サービス</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/services/hp-lp" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    HP・LP制作
                  </Link>
                </li>
                <li>
                  <Link href="/services/system" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    システム開発
                  </Link>
                </li>
                <li>
                  <Link href="/services/recruitment" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    採用支援
                  </Link>
                </li>
                <li>
                  <Link href="/services/interview" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    面接代行サービス
                  </Link>
                </li>
                <li>
                  <Link href="/services/artbloom" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    アート事業のサブスク
                  </Link>
                </li>
                <li>
                  <Link href="/services/syokulab" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    飲食店マッチングアプリ「食ラボ」
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">会社情報</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/company" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link href="#works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    ご利用例
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    チーム
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    ブログ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">お問い合わせ</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm text-muted-foreground">
                    info@recustep.com
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm text-muted-foreground">
                    080-6354-0254
                  </span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="mt-6">
                  お問い合わせ
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} リクステップ. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}