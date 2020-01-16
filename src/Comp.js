import React from 'react'

let menu = [
    {
        name: 'Home',
        active: true,
        link: 'ok',
        sub: ['item1', 'item2', 'item3']
    },
    {
        name: 'Service',
        active: false,
        link: 'ok'
    },
    {
        name: 'Contact',
        active: false,
        link: 'ok',
        sub: ['item1', 'item2', 'item3']
    },
    {
        name: 'About',
        active: false,
        link: 'ok'
    }
]

const Comppp = (props) => {
    return props.menu.map(el => {
        let classnam = "nav-bar-item";
        el.active ? classnam += " menu-active" : classnam += "";
        return <div className="nav-bar" >
            <a href={el.link} className={classnam}>{el.name}</a>
            {el.sub && <div className="sub-list">
                {el.sub.map(aa => <a className="sub-list_item" href="ok">{aa}</a>)}</div>}
        </div>
    })
}

const Comp = () => {

    return (<div><Comppp menu={menu} /> </div>)
}

export default Comp;