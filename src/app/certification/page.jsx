import Logocard from "@/components/certification/Logocard";
import Logocard2 from "@/components/certification/logocard2";
import Banner from "@/components/certification/Title";
import { getCertificationsAndMemberships } from "@/services";

export default async function Home() {
  const page = await getCertificationsAndMemberships();

  return (
    <div className="px-[18px] xl:px-0">
      <div className="mb-24 md:mb-32" />
      <Banner title="Certifications" />
      <Logocard data={page?.Certifications} />
      <Banner title="Memberships" />
      <Logocard2 data={page?.Memberships} />
    </div>
  );
}
