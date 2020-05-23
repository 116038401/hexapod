import React from "react"
import { BasicLink, PageLink } from "./generic/SmallWidgets"

const URL_KOFI = "https://ko-fi.com/minimithi"
const URL_SRC = "https://github.com/mithi/hexapod-robot-simulator"

const ICON_KOFI = "🍵"
const ICON_SRC = "👾"

const PATH_IK = "inverse-kinematics"
const PATH_FK = "forward-kinematics"
const PATH_LP = "leg-patterns"
const PATH_ROOT = "/"

const KOFI_LINK_TXT = "🍵 Buy Mithi coffee"
const SRC_LINK_TXT = "👾 Source code"
const ROOT_LINK_TXT = "💋 Root"

const IK_LINK_TXT = "● Inverse Kinematics"
const FK_LINK_TXT = "● Forward Kinematics"
const LP_LINK_TXT = "● Patterns"

const URLS = [URL_KOFI, URL_SRC]
const URL_LINK_TXTS = [KOFI_LINK_TXT, SRC_LINK_TXT]
const PATHS = [PATH_ROOT, PATH_FK, PATH_IK, PATH_LP]
const LINK_TXTS = [ROOT_LINK_TXT, FK_LINK_TXT, IK_LINK_TXT, LP_LINK_TXT]

const PAGE_LINKS = PATHS.map((path, index) => (
    <PageLink
        key={path}
        path={path}
        symbol={LINK_TXTS[index]}
        klass="nav-footer-link"
    />
))

const BASIC_LINKS = URLS.map((path, index) => (
    <BasicLink
        key={path}
        path={path}
        symbol={URL_LINK_TXTS[index]}
        klass="nav-footer-link"
    />
))

const NavBar = () => (
    <div className="navbar row-container">
        <BasicLink key={URL_KOFI} path={URL_KOFI} symbol={ICON_KOFI} />
        <BasicLink key={URL_SRC} path={URL_SRC} symbol={ICON_SRC} />
        {PATHS.map(path => {
            return <PageLink key={path} path={path} symbol="●" />
        })}
    </div>
)

const NavFooter = () => (
    <div className="row-container border">
        <div className="column-container cell">
            {BASIC_LINKS}
            {PAGE_LINKS[0]}
        </div>
        <div className="column-container cell">{PAGE_LINKS.slice(1)}</div>
    </div>
)

export { NavBar, NavFooter }
