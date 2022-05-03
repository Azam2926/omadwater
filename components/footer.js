import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <svg className='fill-current text-footer -my-0.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 184">
        <g>
          <path className="fill-current" d="M1285.4,81.2c-34,12.5-98.3,33.1-186.9,39.8c-230.8,17.6-274.8-85-472.8-71.3 c-182,12.6-219.4,104.5-345.3,65.2C237.9,101.6,177,70.7,91.6,81.2c-31.7,4-62.6,13-91.6,26.6V184h1440V0 C1392.2,33.7,1340.3,61,1285.4,81.2z"/>
        </g>
      </svg>
      <div className="bg-footer text-white px-12 pt-16 pb-2 space-y-8">
        <div className="space-y-16">
          <div className="flex font-semibold flex-col space-y-4 text-[15px]">
            <h1 className="flex before-text text-xl font-bold">Menu</h1>
            <p><Link href={'/'}>Bosh sahifa</Link></p>
            <p><Link href={'/about'}>Biz haqimizda</Link></p>
            <p><Link href={'/contact'}>Biz bilan bog'laning</Link></p>
          </div>
          <div className="flex font-semibold flex-col space-y-4 text-[15px]">
            <h1 className="flex before-text text-xl font-bold">Biz bilan bog'laning</h1>
            <p><a href="//g.page">Buxoro, Shofirkon, Bog'iafzal</a></p>
            <p><a href="tel:+998939652829">Qo'n'griroq qiling: +998 99 0981375</a></p>
          </div>
          <div className="flex font-semibold flex-col space-y-4 text-[15px]">
            <h1 className="flex before-text text-xl font-bold">Ijtimoiy tarmoqlarimiz</h1>
            <div className="flex space-x-2">
              <a href="https://www.instagram.com/omadwater" target={'_blank'} className={'transition-all bg-primary hover:bg-main p-2 rounded-full'}>
                <svg className="text-white fill-current w-6 h-6" aria-hidden="true" role="img" focusable="false" width="24" height="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.1275 0H4.87243C2.18573 0 0 2.18573 0 4.87243V13.1277C0 15.8142 2.18573 18 4.87243 18H13.1277C15.8142 18 18 15.8142 18 13.1277V4.87243C18 2.18573 15.8142 0 13.1275 0V0ZM8.99998 13.9217C6.28609 13.9217 4.07825 11.7139 4.07825 8.99998C4.07825 6.28609 6.28609 4.07825 8.99998 4.07825C11.7139 4.07825 13.9217 6.28609 13.9217 8.99998C13.9217 11.7139 11.7139 13.9217 8.99998 13.9217ZM14.0394 5.23896C13.2374 5.23896 12.5851 4.58665 12.5851 3.78465C12.5851 2.98265 13.2374 2.3302 14.0394 2.3302C14.8414 2.3302 15.4939 2.98265 15.4939 3.78465C15.4939 4.58665 14.8414 5.23896 14.0394 5.23896Z"/>
                  <path d="M8.99931 5.13347C6.86741 5.13347 5.13281 6.86794 5.13281 8.99997C5.13281 11.1319 6.86741 12.8665 8.99931 12.8665C11.1313 12.8665 12.8658 11.1319 12.8658 8.99997C12.8658 6.86794 11.1313 5.13347 8.99931 5.13347Z"/>
                  <path d="M14.0397 3.38555C13.8197 3.38555 13.6406 3.56463 13.6406 3.78463C13.6406 4.00463 13.8197 4.18371 14.0397 4.18371C14.2598 4.18371 14.4389 4.00477 14.4389 3.78463C14.4389 3.56449 14.2598 3.38555 14.0397 3.38555Z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/#" target={'_blank'} className={'transition-all bg-primary hover:bg-main p-2 rounded-full'}>
                <svg className="text-white fill-current w-6 h-6" aria-hidden="true" role="img" focusable="false" width="24" height="24" viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99812 2.98875H9.64137V0.12675C9.35787 0.08775 8.38287 0 7.24738 0C4.87813 0 3.25513 1.49025 3.25513 4.22925V6.75H0.640625V9.9495H3.25513V18H6.46062V9.95025H8.96937L9.36762 6.75075H6.45988V4.5465C6.46063 3.62175 6.70962 2.98875 7.99812 2.98875Z" fill="%23081F46"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray-500 bg-opacity-50"/>
        <div className='text-xs tracking-normal'>
          Copyright ©{new Date().getFullYear()} Omad Water inc. Barcha huquqlar himoyalangan
        </div>
      </div>
    </footer>
  )
}
