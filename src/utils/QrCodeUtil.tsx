import {
  BarcodeScannedEvent,
  BarcodeScanner
} from '@capacitor-mlkit/barcode-scanning'
import { Camera } from '@capacitor/camera'

export const startScan = async (
  modalRef,
  setScanResult,
  setIsScannerActive
) => {
  // Check camera permissions
  const cameraPermissions = await Camera.checkPermissions()

  if (cameraPermissions.camera === 'denied') {
    // Camera permission denied, show settings alert
    modalRef.current?.present()
    return
  } else if (cameraPermissions.camera === 'prompt') {
    // Camera permission set to prompt, request permission
    const permissionResult = await requestCameraPermission()
    if (permissionResult.camera !== 'granted') {
      modalRef.current?.present()
      return
    }
  }
  // Permission granted, start scanning
  await initiateScan(setScanResult, setIsScannerActive)
}

const initiateScan = async (setScanResult, setIsScannerActive) => {
  setIsScannerActive(true)
  // Add barcode scanner active class
  document.querySelector('body')?.classList.add('barcode-scanner-active')

  // Add the `barcodeScanned` listener
  const listener = await BarcodeScanner.addListener(
    'barcodeScanned',
    async (result: BarcodeScannedEvent) => {
      console.log(result.barcode.rawValue)
      setScanResult(result.barcode.rawValue || null)
      await listener.remove()
      stopScan(setIsScannerActive)
    }
  )
  // Start the barcode scanner
  await BarcodeScanner.startScan()
}

export const stopScan = async setIsScannerActive => {
  setIsScannerActive(false)
  document.querySelector('body')?.classList.remove('barcode-scanner-active')
  await BarcodeScanner.removeAllListeners()
  await BarcodeScanner.stopScan()
}

const requestCameraPermission = async () => {
  const permissionResult = await Camera.requestPermissions()
  return permissionResult
}

export const toggleFlashlight = async (isFlashlightOn, setIsFlashlightOn) => {
  if (isFlashlightOn) {
    await BarcodeScanner.disableTorch()
  } else {
    await BarcodeScanner.enableTorch()
  }
  setIsFlashlightOn(!isFlashlightOn)
}
