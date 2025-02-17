export const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PhysicalTherapist",
    "name": "Encore Performance Physical Therapy",
    "founder": {
      "@type": "Person",
      "name": "Dr. Shreya Wadhawan",
      "jobTitle": "Doctor of Physical Therapy",
      "image": "https://encoreperf.com/dr-shreya.jpg"
    },
    "image": "https://encoreperf.com/og-image.jpg",
    "url": "https://encoreperf.com",
    "telephone": "(408) 203-5593",
    "email": "encoreperf@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1700 Industrial Rd STE C",
      "addressLocality": "San Carlos",
      "addressRegion": "CA",
      "postalCode": "94070",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.4979952,
      "longitude": -122.2448317
    },
    "areaServed": [
      "San Carlos",
      "Redwood City",
      "Belmont",
      "San Mateo",
      "Palo Alto",
      "Bay Area"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-17:00",
    "paymentAccepted": ["Credit Card", "Cash"],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 37.4979952,
        "longitude": -122.2448317
      },
      "geoRadius": "50000"
    },
    "hasMap": "https://maps.app.goo.gl/mqso7EYhyyvvzQY68",
    "sameAs": [
      "https://instagram.com/drshreya.dpt",
      "https://linkedin.com/in/shreyawad",
      "https://maps.app.goo.gl/mqso7EYhyyvvzQY68"
    ],
    "specialty": [
      "Hypermobility",
      "Physical Therapy",
      "Chronic Pain Management",
      "Joint Pain",
      "Sports Rehabilitation"
    ],
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Arjun A"
        },
        "reviewBody": "Shreya has been an amazing PT! She's extremely knowledgeable, attentive, and really works around your schedule..."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}; 