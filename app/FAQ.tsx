import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FrequentlyAskedQuestions = () => {
  return (
    <div className="h-2/6 m-2 sm:m-24 gap-5 grid md:grid-cols-2">

      <div className="left grid grid-cols-1 gap-8">
        <h1 className="text-3xl text-blue-900">General Information</h1>
        <div className="space-y-4">
          <p></p>
          <p className="text-blue-900">
            Eu dictumst cum at sed euismood condimentum?
          </p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
        <div className="space-y-4">
          <p></p>
          <p className="text-blue-900">
            Eu dictumst cum at sed euismood condimentum?
          </p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
        <div className="space-y-4">
          <p></p>
          <p className="text-blue-900">
            Eu dictumst cum at sed euismood condimentum?
          </p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
        <div className="space-y-4">
          <p></p>
          <p className="text-blue-900">
            Eu dictumst cum at sed euismood condimentum?
          </p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
      </div>
        <div>
            <p className="text-slate-500 text-2xl text-center md:mt-20">Frequently Asked Questions</p>
            <div className="h-1 w-80 my-6 bg-slate-500 mx-auto"></div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>About Us (Who we are)</AccordionTrigger>
                    <AccordionContent>
                        KiD WooD’, is Pakistan’s leading furniture store specializing in exclusive, safe, high quality, budget-friendly, premium quality children’s furniture for your child’s comfort
                        `KiD WooD ’ offers you a wide variety in Kid's Car beds, bunk beds, Baby Cots , baby Cupboard, wardrobes, Study tables, bookcases, and more Customized kid's Furniture
                        Best Quality at unbeatable Prices
                        No Compromise On Quality
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How can I customize?</AccordionTrigger>
                    <AccordionContent>
                        Most designs on our website are customizable. If you have a design on your mind, get in touch with us – “You dream it, we make it!”
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>What is the refund policy?</AccordionTrigger>
                    <AccordionContent>
                        Since our products are customized to your requirements, we cannot offer any refunds. We do assure of a great product and service
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>What raw materials do you use?</AccordionTrigger>
                    <AccordionContent>
                        We offer our products in the following raw materials depending on the design, buyer requirement and budget.
                        our furniture meets all international safety standards for children. Our furniture is made with the best of non-toxic A+ Quality materials and craftsmanship.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Which cities do you deliver to?</AccordionTrigger>
                    <AccordionContent>
                    We are based in Islamabad. Our Cash on Delivery Service Available in Rawalpindi/Islamabad City Only. Please Contact Us For Out of City Delivery Procedures.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>How long does it take for delivery?</AccordionTrigger>
                    <AccordionContent>
                        Ready Products Delivery in Faisalabad city On Same Day ,, Any customized product will be manufactured and shipped within 20 Working days from the receipt of the order.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  )
}

export default FrequentlyAskedQuestions