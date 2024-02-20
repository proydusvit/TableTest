import Table from './components/Table/Table';
import BoxThema from './components/Context/BoxThema';
import { ThemeProvider } from './components/Context/ThemaContext';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import { InlineWidget } from 'react-calendly';
function App() {
  return (
    // <ThemeProvider>
    //   <BoxThema>
    //     <ThemeSwitcher />
    //     <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
    //       Таблиця з даними про Котиків
    //     </h1>
    //     <Table />
    //   </BoxThema>
    // </ThemeProvider>
    <div>
      <InlineWidget url="https://calendly.com/vladislavshsh" />
    </div>
  );
}

export default App;
