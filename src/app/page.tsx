'use client';

declare global {
  interface Window {
    fbq: (action: string, event: string, params?: Record<string, string>) => void;
  }
}

export default function Home() {
  const lineUrl = "https://line.me/R/ti/p/YOUR_LINE_ID";
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

  const handleLineClick = (buttonLocation: string) => {
    if (typeof window !== 'undefined' && window.fbq && pixelId) {
      window.fbq('track', 'Lead', {
        content_name: 'LINE Registration',
        content_category: 'Contact',
        button_location: buttonLocation,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            ホゲ太郎の脱毛サロン
          </h1>
          <p className="text-gray-600 text-center mt-2">
            プロフェッショナルな脱毛で理想の肌を手に入れよう
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-6 rounded-lg mb-8">
            <h2 className="text-4xl font-bold mb-4">
              今なら LINE登録で特別価格！
            </h2>
            <p className="text-xl mb-8">
              初回限定50%OFF！さらに無料カウンセリング付き
            </p>
            <a
              href={lineUrl}
              onClick={() => handleLineClick('hero-section')}
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg"
            >
              🎉 LINE登録で特別価格をGET！
            </a>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              なぜホゲ太郎の脱毛サロンが選ばれるのか？
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                最新の脱毛機器で痛みを最小限に
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                経験豊富なスタッフによる丁寧な施術
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                清潔で落ち着いた環境
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                アフターケアも充実
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              施術メニュー
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>全身脱毛</span>
                <span className="font-bold text-purple-600">¥15,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span>顔脱毛</span>
                <span className="font-bold text-purple-600">¥5,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span>VIO脱毛</span>
                <span className="font-bold text-purple-600">¥8,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span>ワキ脱毛</span>
                <span className="font-bold text-purple-600">¥3,000</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              ※LINE登録で全メニュー50%OFF！
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            アクセス情報
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2">店舗情報</h4>
              <p className="text-gray-600">
                〒100-0001<br />
                東京都千代田区千代田1-1-1<br />
                ホゲビル3階
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">営業時間</h4>
              <p className="text-gray-600">
                平日：10:00 - 20:00<br />
                土日祝：10:00 - 18:00<br />
                定休日：月曜日
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-8 px-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              まずは無料カウンセリングから！
            </h3>
            <p className="mb-6">
              お気軽にLINEでお問い合わせください。24時間受付中！
            </p>
            <a
              href={lineUrl}
              onClick={() => handleLineClick('bottom-section')}
              className="inline-block bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300 shadow-lg"
            >
              LINE友達追加はこちら
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2024 ホゲ太郎の脱毛サロン. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
