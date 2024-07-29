import { getPage } from "@/api/pagesApi";
import CategoriesSwiper from "@/components/ui/CategoriesSwiper";
import HomeBanner from "@/components/pages/home/homeBanner/HomeBanner";
import { Lang } from "@/types/api/api.types";
import { Metadata } from "next";
import ProductsSwiper from "@/components/ui/ProductsSwiper";

export default async function HomePage({
    params: { lang },
}: {
    params: { lang: Lang };
}) {
    return (
        <>
            <HomeBanner />
            <div className="container">
                <section className="section-margin">
                    <CategoriesSwiper />
                </section>

                <section className="section-margin">
                    <ProductsSwiper />
                </section>

                <section className="section-margin"></section>
            </div>

            <section className="section-margin bg-main-light section-padding">
                <div className="container">
                    <ProductsSwiper />
                </div>
            </section>

            <div className="container">
                <section className="section-margin">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa quisquam deleniti laboriosam ea animi pariatur odio
                    temporibus minus aliquam impedit eius voluptatum veniam
                    necessitatibus, eveniet quia expedita enim vitae, deserunt,
                    quo omnis. Impedit id non nemo, earum perspiciatis
                    explicabo, quia sint ab numquam vel aut blanditiis facilis
                    dolorem voluptas labore qui magnam maiores quasi? Animi hic
                    quidem eum voluptas saepe corrupti molestiae exercitationem
                    nulla expedita quis, repellendus laboriosam voluptates!
                    Officia molestias vel corporis et eligendi aliquid
                    aspernatur! Deleniti minus ipsam repudiandae corporis
                    quisquam nihil nostrum, obcaecati magni sunt. Culpa deserunt
                    voluptatem ea ut nobis eligendi ex vitae minus. Quisquam vel
                    similique quo magnam ea cumque qui eveniet, sit perferendis
                    cupiditate delectus voluptatibus soluta, est laboriosam
                    quaerat ad perspiciatis dignissimos harum expedita?
                    Corrupti, nobis fugiat ad adipisci iste quaerat sed et ex
                    provident voluptas tempora excepturi qui quas nulla
                    molestias pariatur quo maxime. Debitis officiis atque id
                    voluptates culpa minus, molestias sit iusto quia aliquid
                    esse facilis hic, cupiditate molestiae ipsum facere eos
                    laudantium! Provident distinctio iure harum? Nemo soluta
                    exercitationem porro labore velit. Magni, dicta qui? A
                    dolorum expedita modi repellendus alias cupiditate illo, qui
                    quos aperiam mollitia eos repellat, voluptate animi eius
                    quasi aspernatur voluptatibus excepturi. Adipisci sequi
                    libero nisi praesentium consectetur debitis molestiae
                    eveniet delectus ratione iusto quisquam accusantium
                    provident tempore dolores facilis quae et esse architecto
                    voluptas repudiandae magnam voluptatem sit, excepturi
                    incidunt! Molestiae quas doloribus magni, dicta dolor eum,
                    possimus ut totam esse, minima nihil! Provident rerum
                    asperiores totam voluptates perspiciatis obcaecati ipsa rem
                    cupiditate! Explicabo laboriosam at libero nihil. Tenetur,
                    totam suscipit qui in similique porro consequuntur sunt
                    tempore iure voluptas laboriosam quos, dolor praesentium
                    aperiam eveniet laborum? Laudantium earum, voluptatibus
                    doloribus odio molestiae corporis odit facere soluta sunt
                    accusamus in reprehenderit ullam magnam beatae facilis
                    quidem enim at, ut laborum. Similique praesentium animi
                    cupiditate autem porro dignissimos dolore eum dolorum
                    perferendis eveniet doloremque cum distinctio magnam unde
                    nisi repudiandae at fugit ad quidem, accusamus a quaerat in
                    architecto! Harum similique placeat debitis odio vel esse?
                    Voluptatum vitae fugiat dolore, quas facere autem
                    perspiciatis distinctio ea deleniti repudiandae minima
                    nostrum eum fuga consequatur perferendis, porro quis rem
                    voluptas, magni delectus tempora praesentium rerum. Totam
                    adipisci dolor beatae error a consequatur modi aliquam
                    numquam, amet voluptate labore ratione doloremque suscipit
                    inventore. Fugit quam consequuntur repellendus, earum
                    architecto consectetur rerum deleniti alias ratione corporis
                    corrupti sunt voluptates neque qui nemo? Quas nisi suscipit
                    alias facilis nesciunt aspernatur vitae repellendus fugiat
                    provident inventore, nemo corrupti ad porro ab. Nulla,
                    dolor? Tempore cum accusamus pariatur, vitae consectetur
                    mollitia rem voluptatem hic, nesciunt iusto velit.
                    Similique, possimus et est sunt dolorum ea ipsa itaque
                    pariatur suscipit officiis minus? Accusantium officiis,
                    corporis ut perferendis, minus, voluptatem dolores repellat
                    voluptas eos velit voluptatum totam nostrum labore accusamus
                    deserunt libero saepe quam deleniti possimus amet magni
                    explicabo harum ex iste? Voluptatibus quis ut officiis
                    explicabo reiciendis iste ea expedita. Ab possimus a
                    reiciendis nostrum nisi eius. Repellendus magni veniam
                    sapiente veritatis ab beatae ducimus officiis laborum illum,
                    quae quisquam recusandae cumque omnis perferendis a culpa
                    commodi dicta dolor incidunt inventore vel accusamus! Velit
                    nobis laboriosam voluptatum deleniti voluptatem!
                    Voluptatibus suscipit quas assumenda voluptatem accusantium
                    id impedit velit doloremque ducimus, praesentium, aspernatur
                    maiores officia debitis rerum. Amet ipsum quam repellat
                    obcaecati est repellendus vel laborum explicabo inventore
                    et, a illo unde aliquid suscipit, officiis sit labore dicta
                    dignissimos voluptas iste dolores quos alias eveniet
                    deleniti. Doloremque voluptate reprehenderit doloribus
                    reiciendis vero esse voluptas accusantium officia nostrum?
                    Corrupti, et. Quibusdam esse iusto animi vel, nam
                    reprehenderit explicabo inventore sequi, ex ipsum culpa
                    impedit quidem itaque maiores, ad quo mollitia? Illo vitae
                    sed laborum animi temporibus ex obcaecati excepturi neque,
                    labore, quasi ut omnis, fugit officiis qui quia deleniti!
                    Eaque modi praesentium rerum architecto unde, iure veniam
                    atque laboriosam, autem in iusto corporis vero adipisci sed
                    possimus, eos ut doloremque libero recusandae dignissimos
                    expedita? Debitis omnis veniam molestiae odit iste
                    consectetur exercitationem voluptas eaque dolores nostrum
                    consequatur vel, vero repellendus pariatur provident optio
                    fugiat, non commodi officiis quas ducimus illo. Asperiores,
                    dicta necessitatibus? Vero nobis magni dolorem eligendi,
                    sint doloremque deserunt perspiciatis, expedita, sit placeat
                    tempore blanditiis aliquid! Eaque possimus vitae dolores
                    dolorum deserunt cumque quibusdam libero qui sed, veniam
                    incidunt labore architecto temporibus saepe impedit vero
                    iste non rerum perspiciatis sint quae dicta laborum eligendi
                    fugiat! Veritatis optio facere consequuntur odit
                    perspiciatis sed perferendis facilis hic voluptates quisquam
                    iure deserunt quia magnam, explicabo reiciendis culpa,
                    excepturi voluptatum in, omnis quas nisi vero laboriosam
                    voluptas? Aspernatur esse voluptates amet perspiciatis
                    exercitationem ipsam rem obcaecati nostrum, totam delectus
                    cum explicabo magni consequuntur quisquam dolor? Architecto
                    obcaecati tempora debitis autem veritatis voluptatem ab,
                    quasi sequi deleniti inventore culpa sint velit ad eligendi
                    reiciendis molestiae veniam quaerat hic. Eveniet est
                    mollitia non nulla. Fugiat maiores aperiam necessitatibus
                    recusandae totam nisi sequi exercitationem soluta laudantium
                    hic adipisci, earum ipsum voluptas aliquam mollitia, quo
                    tenetur architecto voluptates omnis ex repellat excepturi
                    dolorem ea. Quia soluta ipsa sequi, incidunt libero ipsum,
                    ex adipisci neque sapiente, est velit delectus? Distinctio
                    dolorum eum consequatur nihil eligendi corporis error,
                    consequuntur quasi, molestias obcaecati quibusdam fuga, non
                    quod? Ea porro incidunt illo minima fuga tenetur, ducimus
                    officiis perferendis aut aspernatur unde distinctio odio
                    expedita repellat reiciendis dolorem quod ut, culpa
                    cupiditate ratione. Commodi corrupti sunt esse blanditiis,
                    velit ducimus tenetur asperiores laboriosam nihil aspernatur
                    aliquam beatae dicta odit eligendi laborum. Nemo ratione
                    fugit obcaecati nisi repellendus eum ex, esse culpa numquam
                    nesciunt cum ducimus mollitia commodi enim consectetur
                    voluptas delectus voluptate! Sed delectus quod architecto
                    fuga vero, dolorum molestiae atque obcaecati sunt dolor
                    officiis aliquid natus iure soluta doloremque magnam
                    aspernatur, quaerat velit tempora. Veritatis debitis neque
                    sint dolorum, voluptatem eius doloribus, a assumenda dicta,
                    esse velit? Recusandae, odit harum hic, provident dolor
                    dolore vel atque quae maiores itaque labore doloribus
                    temporibus vitae mollitia, ab expedita unde. Optio cum
                    assumenda odio doloribus illo laboriosam ab provident magnam
                    nulla consequatur fugit atque, cupiditate eum repellat
                    doloremque laudantium nihil! Culpa eum minus quas ut modi
                    aspernatur tempore aliquid est, facere nostrum temporibus
                    corrupti illum commodi pariatur, esse cum.
                </section>
            </div>
        </>
    );
}

export async function generateMetadata({
    params: { lang },
}: {
    params: { lang: Lang };
}): Promise<Metadata> {
    const page = await getPage({ pageId: 1, lang });

    return {
        title: page.data.seo_title,
        description: page.data.meta_description,
        keywords: page.data.meta_keywords,
    };
}
