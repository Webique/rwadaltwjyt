export const siteConfig = {
  links: {
    x: "https://x.com/rwadaltwjyt",
    instagram: "https://www.instagram.com/rwadaltwjyt",
    facebook: "https://facebook.com/rwadaltwjyt",
    tiktok: "https://www.tiktok.com/@rwadaltwjyt",
    whatsapp: "https://wa.me/966509645040",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.946981544836!2d39.576569299999996!3d24.4872938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf7260842747%3A0xeecca8b396d26c2e!2sBRUNCH!5e0!3m2!1sen!2seg!4v1759109828880!5m2!1sen!2seg",
    googleMap: "https://maps.app.goo.gl/mTQC6XzfihEZMzMa8"
  },

  support: {
    phone: "+966509645040",
    email: "rwadaltwjyt@gmail.com",
    whatsapp: "+966509645040"
  },
  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`,
  twitter: "@rwadaltwjyt"
};

export type SiteConfig = typeof siteConfig;
