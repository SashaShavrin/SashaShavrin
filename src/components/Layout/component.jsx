export const Layout = ({ children }) => {
  return (
    <div>
      <header style={{ display: "flex" }}>
        <div>header</div>
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};
