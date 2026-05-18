import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../ui/accordion'

function FilterSection({ title, value, children }) {
    return (
        <div className="border-b border-gray-100 last:border-none">
            <Accordion type="single" collapsible defaultValue={value}>
                <AccordionItem value={value} className="border-none">
                    <AccordionTrigger className="py-4 text-sm font-semibold text-black hover:no-underline">
                        {title}
                    </AccordionTrigger>

                    <AccordionContent>
                        <div className="pt-1">
                            {children}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default FilterSection