import React from 'react'
import Icon1 from '../../images/book-1.jpg'
import Icon2 from '../../images/book2.jpg'
import Icon3 from '../../images/book-3.jpg'
import Icon4 from '../../images/book-4.jpg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from './ServiceElement'
const Service = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>My Books</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>The Grasshopper and the Owl </ServicesH2>
                <ServicesP>This story takes us to the natural habitat of the Grasshopper </ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Misha and the Gigantic Birthday Cake</ServicesH2>
                <ServicesP>Misha is at it again. This time it’s her birthday</ServicesP>
            </ServicesCard>
           
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Misha and her farm adventure</ServicesH2>
                <ServicesP>This delightful little book is a wonderful introduction to farming </ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Misha learns about Money</ServicesH2>
                <ServicesP> See what happens when this little girl begins to grow up as she learns about saving and spending.</ServicesP>
            </ServicesCard>

        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Service