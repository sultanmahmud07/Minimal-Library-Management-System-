import FAQAccordion from "./faqs";

const FAQ = () => {
 

  return (
    <div className='py-4 md:py-7'>
      <div className="main_container">
        <div className="text-center">
          <h5 className='text-primary font-bold capitalize md:text-sm'>Need Help?</h5>
          <h2 className='section_title text-2xl md:text-4xl mt-2'>The Answers to All Your Questions</h2>
          <p className="my-2 md:my-4 max-w-2xl mx-auto">
          Have questions about how to use the library system? Find answers about borrowing, managing books, and viewing your summaries.
          </p>
        </div>
        <FAQAccordion></FAQAccordion>
      </div>
    </div>
  )
}

export default FAQ;
