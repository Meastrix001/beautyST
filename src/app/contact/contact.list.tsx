import { DataList } from "@radix-ui/themes"
import { contactData } from "./contactData";
import { ContactListItem } from "./contact.list.item";

export const ContactList = () => {
    return <DataList.Root>
        {contactData.map((item, idx) => (
            <ContactListItem item={item} idx={idx} key={idx} />
        ))}

    </DataList.Root>
}
