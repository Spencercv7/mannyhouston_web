import styled, {css} from 'styled-components';
import media from "../MediaQueries";


const StyledSection = styled.section`    

    width: 100%;
    height: 100vh;

    min-height: 600px;

    display: grid;
    
    position: relative;
    background-color: ${(props) => props.theme.colors.black};
    padding: 8rem;
    overflow: hidden;

    padding: 7rem 7rem;

    ${media.width_800`
        padding: 6rem;
    `}

    ${media.width_600`
        padding: 6rem 3rem;
    `}

    ${media.width_400`
        padding: 6rem 1rem;
    `}



`

const Section = ({styling, children}) => {
    return (
        <StyledSection styling={ styling }>
            {children}
        </StyledSection>
    );
}
 
export default Section;