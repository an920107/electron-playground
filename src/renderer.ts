import Versions from "./@types/versions";

const information = document.getElementById('info')

// @ts-expect-error
const _versions: Versions = window.versions;

if (information != null) {
    information.innerText = `This app is using Chrome (v${_versions.chrome()}), Node.js (v${_versions.node()}), and Electron (v${_versions.electron()})`
} else {
    console.log("info is null")
}