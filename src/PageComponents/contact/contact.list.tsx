import { DataList } from "@radix-ui/themes"
import { contactData } from "./contactData";
import { ContactListItem } from "./contact.list.item";
import { PageLang } from "@/models/pageLang.model";

export const ContactList = ({ lang }: PageLang) => {
    return <DataList.Root>
        {contactData.map((item, idx) => (
            <ContactListItem lang={lang} item={item} idx={idx} key={idx} />
        ))}

    </DataList.Root>
}
