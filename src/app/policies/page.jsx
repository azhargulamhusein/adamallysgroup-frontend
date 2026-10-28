
import Link from "next/link";
import qs from "qs";
import { Axios } from "@/config/Axios";

export const metadata = {
  title: "Corporate Policies | Adamallys LLC",
  description:
    "Explore the corporate policies of Adamallys LLC, covering quality, health and safety, environmental responsibility, inclusion and ethical business practices.",
};

async function getCorporatePolicies() {
  const params = qs.stringify({
    populate: ["document"],
    sort: ["displayOrder:asc", "title:asc"],
    pagination: { pageSize: 100 },
  });

  try {
    const response = await Axios(`/corporate-policies?${params}`);
    return response?.data || [];
  } catch (error) {
    console.error("Unable to load corporate policies", error);
    return [];
  }
}

export default async function PoliciesPage() {
  const policies = await getCorporatePolicies();

  return (
    <main className="px-[18px] xl:px-0 text-theme-main">
      <div className="mb-24 md:mb-32" />

      <div className="container mx-auto py-12 md:py-20">
        <nav className="mb-8 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-3">/</span>
          <Link href="/certification" className="hover:underline">
            Standards & Innovation
          </Link>
          <span className="mx-3">/</span>
          <span>Corporate Policies</span>
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Corporate Policies
        </h1>

        <div className="w-14 h-1 bg-theme-main mb-8" />

        <p className="max-w-4xl text-lg leading-relaxed mb-12">
          Adamallys LLC is committed to maintaining high standards
          of quality, safety, ethical conduct, environmental
          responsibility and fair employment practices. Our
          corporate policies establish the principles and
          requirements that guide our operations and professional
          responsibilities.
        </p>

        {policies.length === 0 ? (
          <p className="text-gray-600">
            Corporate policy documents will be available here soon.
          </p>
        ) : (
          <div className="max-w-5xl space-y-4">
            {policies.map((policy) => {
              const item = policy.attributes || policy;
              const document =
                item.document?.data?.attributes ||
                item.document?.attributes ||
                item.document;

              const documentUrl = document?.url;

              if (!documentUrl) return null;

              return (
                <div
                  key={policy.id}
                  className="border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5"
                >
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h2>

                    {item.description && (
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <a
                    href={documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-theme-main text-white px-7 py-3 whitespace-nowrap hover:opacity-90 transition-opacity"
                  >
                    View Policy PDF
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
