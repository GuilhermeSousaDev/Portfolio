import style from './markdown-styles.module.css';
import ReactMarkdown from "react-markdown";
import AppBox from "../../components/MuiCustomComponents/AppBox";
import Navbar from "../../app/Navbar";
import { useAppSelector } from '../../hooks/useAppSelector';

const markdown = `A paragraph with *emphasis* and **strong importance**.
## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b


[Github](https://github.com)
`

export default function Post() {
    const isThemeDark = useAppSelector(state => state.theme.default) === 'dark';

    return (
        <AppBox>
            <Navbar />
            <ReactMarkdown 
                children={markdown} 
                className={isThemeDark ? style.reactMarkDownDark : style.reactMarkDownLight} 
            />
        </AppBox>
    )
}