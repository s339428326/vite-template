import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WrappedApp } from './App';
import { NotFound, Home } from './pages/index';

//AAA原則
//https://ithelp.ithome.com.tw/articles/10299052

//React Testing Library With Jest Tutorial For Beginners
//https://www.youtube.com/watch?v=v6LK5alOofs

//單元測試範例
describe('App', () => {
  //針對測試項目命名
  it('首頁缺少 h1 標籤', () => {
    //ARRANGE
    render(<WrappedApp />);
    //ACT
    //ASSERT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    );
  });
});
