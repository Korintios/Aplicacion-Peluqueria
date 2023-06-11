import './globals.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css"

      
export default function RootLayout({ children }) {

  const MENU_ITEMS = [
		{
			link: "/reception",
			tittle: "Recepcion",
			icon: "pi pi-desktop",
		},
		{
			link: "/reports",
			tittle: "Reportes",
			icon: "pi pi-book",
		},
		{
			link: "/inventory",
			tittle: "Inventario",
			icon: "pi pi-box",
		},
	];

  return (
		<html>
			<body>
        <div className="sidebar flex justify-content-between flex-column">
          <div className="sidebar-logo">
            <h4>UWU</h4>
          </div>
          <ul>
            {MENU_ITEMS.map((e) => {
              return (
                <li key={e.tittle}>
                  <a href={e.link}>
                    <i className={e.icon}></i>
                    <span className="links_name">{e.tittle}</span>
                  </a>
                  <span className="tooltip">{e.tittle}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <section className="home-section">
          {children}
        </section>
      </body>
		</html>
  )
}