import PageHeader from "@/components/page-header"

export default function AboutPage() {
  const intro =
    "Muy Buen Coffee is created with love and care (and coffee) by John Choura in Long Beach, CA."
  const body =
    "This site was born out of socal.coffee, a platform that originally aimed to highlight exceptional coffee places in Southern California. Over time, the site evolved to include recipes, but managing the expanding content became overwhelming, and it fell out of date. Determined to expand beyond Southern California, Muy Buen Coffee emerged as a fresh and exciting project."

  return (
    <>
      <PageHeader>Buenos dias.</PageHeader>
      <div className="grid-container">
        <div className="col-span-full pt-0 pb-10">
          <h2 className="text-buen-xl !leading-[1.2] mb-5">{intro}</h2>
          <p className="!leading-[1.65]">{body}</p>
        </div>
      </div>
      <br />
    </>
  )
}
