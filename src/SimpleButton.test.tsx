import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SimpleButton } from "./SimpleButton";

test("ボタンをクリックするとON/OFFの表示が切り替わる", () => {
    // コンポーネントの関数を使用してボタンを生成する
    render(<SimpleButton />);
    // ボタンのDOMを取得 → getByRole
    const simpleButton = screen.getByRole("button");
    // コンポーネントのDOMのテキストをアサーションする。
    //   -> toHaveTextContent()
    expect(simpleButton).toHaveTextContent("OFF");
    // コンポーネントをクリックする処理
    userEvent.click(simpleButton);
    // クリックしてONになったかどうかをテスト
    expect(simpleButton).toHaveTextContent("ON");
});
