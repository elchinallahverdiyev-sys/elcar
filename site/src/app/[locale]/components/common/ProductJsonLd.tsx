import { jsonLdHtml, productJsonLd } from "@/lib/seo";

/** Product JSON-LD. Qiymət və rəy yoxdursa heç nə yazılmır (bax: productJsonLd) */
const ProductJsonLd = (props: Parameters<typeof productJsonLd>[0]) => {
  const data = productJsonLd(props);
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdHtml(data) }}
    />
  );
};

export default ProductJsonLd;
