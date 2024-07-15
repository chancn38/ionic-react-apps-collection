import { Redirect, RouteProps } from "react-router-dom";
import About from "../pages/about/About";
import FaceDetect from "../pages/face-detection/FaceDetect";
import Fingerprint from "../pages/fingerprint/Fingerprint";
import Home from "../pages/home/Home";
import OCR from "../pages/ocr/OCR";
import PhoneSettings from "../pages/phone-settings/PhoneSettings";
import PushNotification from "../pages/push-notification/PushNotification";
import QRCodeGenerator from "../pages/qrcode-generator/QRCodeGenerator";
import QRCodeScanner from "../pages/qrcode-scanner/QRCodeScanner";
import Settings from "../pages/settings/Settings";
import Login from "../pages/auth/Login";

export interface RouteDefinition extends RouteProps {
    path: string;
    exact: boolean;
    component: React.ComponentType<any>;
    private?: boolean;
  }

const routes: RouteDefinition[] = [
    { path: '/login', exact: true, component: Login, private: false },

    { path: '/', exact: true, component: () => <Redirect to='/home/Home' /> },
    { path: '/home/:name', exact: true, component: Home, private: true },
    { path: '/settings/:name', exact: true, component: Settings, private: true },
    { path: '/about/:name', exact: true, component: About, private: true },
    { path: '/scanqr/:name', exact: true, component: QRCodeScanner, private: true },
    { path: '/generateqr/:name', exact: true, component: QRCodeGenerator, private: true },
    { path: '/fingerprint/:name', exact: true, component: Fingerprint, private: true },
    { path: '/phonesettings/:name', exact: true, component: PhoneSettings, private: true },
    { path: '/ocr/:name', exact: true, component: OCR, private: true },
    { path: '/facedetect/:name', exact: true, component: FaceDetect, private: true },
    { path: '/pushnotification/:name', exact: true, component: PushNotification, private: true },
  ];

export default routes;