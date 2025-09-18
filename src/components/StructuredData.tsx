import { useEffect } from 'react';

interface StructuredDataProps {
  data: object;
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}

// Structured data generators
export const generateOrganizationData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HomeStay",
  "description": "Комфортные апартаменты для посуточной аренды в Москве",
  "url": "https://homestay.lovable.app",
  "logo": "https://homestay.lovable.app/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+7-495-123-45-67",
    "contactType": "customer service",
    "availableLanguage": ["Russian", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Москва",
    "addressCountry": "RU"
  },
  "sameAs": [
    "https://www.instagram.com/homestay",
    "https://www.facebook.com/homestay",
    "https://t.me/homestay"
  ]
});

export const generateWebSiteData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HomeStay - Комфортные апартаменты",
  "url": "https://homestay.lovable.app",
  "description": "Комфортные апартаменты для посуточной аренды в Москве. Честные фото, прозрачные цены, поддержка 24/7.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://homestay.lovable.app/apartments?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const generateApartmentData = (apartment: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": apartment.title,
  "description": apartment.description,
  "image": apartment.image || apartment.images?.[0],
  "offers": {
    "@type": "Offer",
    "price": apartment.price,
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": apartment.price,
      "priceCurrency": "RUB",
      "unitText": "за ночь"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": apartment.rating,
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": apartment.reviewCount || 100
  },
  "category": "Apartment Rental",
  "brand": {
    "@type": "Organization",
    "name": "HomeStay"
  }
});

export const generateApartmentListData = (apartments: any[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Апартаменты HomeStay",
  "description": "Коллекция комфортных апартаментов для краткосрочной аренды",
  "numberOfItems": apartments.length,
  "itemListElement": apartments.map((apartment, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": apartment.title,
      "description": apartment.description,
      "image": apartment.image,
      "url": `https://homestay.lovable.app/apartment/${apartment.id}`,
      "offers": {
        "@type": "Offer",
        "price": apartment.price,
        "priceCurrency": "RUB"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": apartment.rating,
        "bestRating": "5"
      }
    }
  }))
});

export const generateReviewsData = (reviews: any[], apartmentTitle: string) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": apartmentTitle
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": review.comment,
    "datePublished": review.date
  }))
});

export const generateBreadcrumbData = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateLocalBusinessData = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "HomeStay",
  "description": "Комфортные апартаменты для посуточной аренды",
  "url": "https://homestay.lovable.app",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Москва",
    "addressCountry": "RU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "55.7558",
    "longitude": "37.6176"
  },
  "telephone": "+7-495-123-45-67",
  "openingHours": "Mo-Su 00:00-24:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "ratingCount": "515"
  },
  "priceRange": "5500-18000 RUB"
});