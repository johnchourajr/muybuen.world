import PageHeader from "@/components/page-header";

export default function FindPage() {
  return (
    <>
      <PageHeader>
        Find Buen <br />
        Coffee
      </PageHeader>
      <div className="grid-container">
        <div className="col-span-full pt-0 pb-6">
          <p className="!leading-[1.65]">
            De nada to see here at the moment, but soon you'll be able to search
            across anywhere in the world to find the best coffee in your area.
            Stay tuned!
          </p>
        </div>
      </div>
    </>
  );
}
