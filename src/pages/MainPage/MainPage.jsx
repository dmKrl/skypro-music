import { useContext, useState } from 'react';
// import { Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import MediaPlayer from '../../components/MediaPlayer/MediaPlayer';
import SearchInput from '../../components/Main/SearchInput';
import SectionsNav from '../../components/SectionNav/SectionsNav';
import SideBar from '../../components/SideBar/SideBar';
import GlobalStyle from '../../GlobalStyle.styles';
import * as S from '../../App.styles';
import BarPlayerContext from '../../context/MediaPlayerContext';

function MainPage() {
  const [visibleNav, setVisibleNav] = useState(true);
  const handlerVisibleNav = () => setVisibleNav(!visibleNav);
  const { isShowing } = useContext(BarPlayerContext);

  const handleLogout = () => {
    localStorage.setItem('userDataInfo', null);
  };
  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <SectionsNav
              handleLogout={handleLogout}
              onClick={handlerVisibleNav}
              visible={visibleNav}
            />
            <S.MainCnterBlock>
              <SearchInput />
              <Outlet />
            </S.MainCnterBlock>
            <SideBar />
          </S.Main>
          {isShowing ? <MediaPlayer /> : ''}
          <footer />
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default MainPage;
