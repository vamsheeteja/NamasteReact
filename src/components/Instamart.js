import { useState } from 'react'

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {/* Built our own Accordion */}
      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  )
}

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState('')
  return (
    <div>
      <h1 className="text-3xl p-2 m-2">Instamart</h1>
      <Section
        title={'About Instamart'}
        description={
          'Lorem ipsum dolor sit amet. Et internos placeat a repellat quibusdam ut quisquam placeat eos deleniti aliquam sit consectetur voluptas et eius excepturi ex ipsum corporis. Et fuga blanditiis sed aperiam modi et accusamus unde At galisum officiis ea aliquid soluta? Eum libero deserunt non quibusdam error et aliquid illo ea aspernatur saepe ut suscipit possimus. Vel eius enim in iusto perferendis eum ipsam libero et voluptatem debitis!'
        }
        isVisible={visibleSection === 'about'}
        setIsVisible={(bool) => setIsVisibleSection(bool && 'about')}
      />
      <Section
        title={'Team Instamart'}
        description={
          'Lorem ipsum dolor sit amet. Et internos placeat a repellat quibusdam ut quisquam placeat eos deleniti aliquam sit consectetur voluptas et eius excepturi ex ipsum corporis. Et fuga blanditiis sed aperiam modi et accusamus unde At galisum officiis ea aliquid soluta? Eum libero deserunt non quibusdam error et aliquid illo ea aspernatur saepe ut suscipit possimus.'
        }
        isVisible={visibleSection === 'team'}
        setIsVisible={(bool) => setIsVisibleSection(bool && 'team')}
      />
      <Section
        title={'Careers'}
        description={
          'Lorem ipsum dolor sit amet. Et internos placeat a repellat quibusdam ut quisquam placeat eos deleniti aliquam sit consectetur voluptas et eius excepturi ex ipsum corporis. Et fuga blanditiis sed aperiam modi et accusamus unde At galisum officiis ea aliquid soluta? Eum libero deserunt non quibusdam error et aliquid illo ea aspernatur saepe ut suscipit possimus. Vel eius enim in iusto perferendis eum ipsam libero et voluptatem debitis!'
        }
        isVisible={visibleSection === 'careers'}
        setIsVisible={(bool) => setIsVisibleSection(bool && 'careers')}
      />
      {/* <Section
        title={'Products'} 
        description={
          'Lorem ipsum dolor sit amet. Et internos placeat a repellat quibusdam ut quisquam placeat eos deleniti aliquam sit consectetur voluptas et eius excepturi ex ipsum corporis. Et fuga blanditiis sed aperiam modi et accusamus unde At galisum officiis ea aliquid soluta? Eum libero deserunt non quibusdam error et aliquid illo ea aspernatur saepe ut suscipit possimus. Vel eius enim in iusto perferendis eum ipsam libero et voluptatem debitis!'
        }
        isVisible={visibleSection === 'products'}
        setIsVisible={(bool) => setIsVisibleSection(bool && 'products')}
      />
      <Section
        title={'Details'}
        description={
          'Lorem ipsum dolor sit amet. Et internos placeat a repellat quibusdam ut quisquam placeat eos deleniti aliquam sit consectetur voluptas et eius excepturi ex ipsum corporis. Et fuga blanditiis sed aperiam modi et accusamus unde At galisum officiis ea aliquid soluta? Eum libero deserunt non quibusdam error et aliquid illo ea aspernatur saepe ut suscipit possimus. Vel eius enim in iusto perferendis eum ipsam libero et voluptatem debitis!'
        }
        isVisible={visibleSection === 'details'}
        setIsVisible={(bool) => setIsVisibleSection(bool && 'details')}
      /> */}
      {/* <AboutInstaMart />
      <DetailOfInstaMart />
      <TeamInstaMart />
      <Product />
      <Careers /> */}
    </div>
  )
}

export default Instamart
