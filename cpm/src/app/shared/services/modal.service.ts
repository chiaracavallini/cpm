import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { take } from 'rxjs/operators'
import {BsModalRef, BsModalService, ModalOptions} from "ngx-bootstrap/modal";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  config: ModalOptions = {
    keyboard: undefined,
    ignoreBackdropClick: undefined,
    class: undefined,
    initialState: undefined,
    animated: true
  }

  modalRef: BsModalRef | null = null

  constructor(private readonly modalService: BsModalService) {}

  /**
   * opens the modal
   * configure the modal
   * select the size
   * pass any data and set the title
   * @param modalComponent
   * @param modalTitle
   * @param size
   * @param modalParams
   * @param closeWithKeyboard
   * @param ignoreCloseWithClick
   */
  openModal(
    modalComponent: any,
    modalTitle: string,
    size?: 'xl' | 'lg' | 'md' | 'sm',
    modalParams?: any,
    closeWithKeyboard?: boolean,
    ignoreCloseWithClick?: boolean,
    cssClass?: string
  ): void {
    this.modalRef = new BsModalRef()
    this.config = {
      ...this.config,
      keyboard: closeWithKeyboard,
      ignoreBackdropClick: ignoreCloseWithClick,
      class: cssClass,
      initialState: modalParams
    }
    this.setSize(size ?? 'md')
    this.modalRef = this.modalService.show(modalComponent, this.config)
    this.modalRef.content.title = modalTitle
  }

  onShownEvent(): Observable<any> {
    return this.modalService.onShown.pipe(take(1))
  }

  onShowEvent(): Observable<any> {
    return this.modalService.onShow.pipe(take(1))
  }

  onHideEvent(): Observable<any> {
    return this.modalService.onHide.pipe(take(1))
  }

  onHiddenEvent(): Observable<any> {
    return this.modalService.onHidden.pipe(take(1))
  }

  /**
   * on the basis of the requested size, it sets the class of the modal that defines the size
   * @param size
   * @private
   */
  private setSize(size: string): void {
    if (!this.config.class) this.config.class = ''
    switch (size) {
      case 'xl':
        this.config.class += ' modal-xl'
        break
      case 'lg':
        this.config.class += ' modal-lg'
        break
      case 'sm':
        this.config.class += ' modal-sm'
        break
      default:
        this.config.class += ' modal-md'
        break
    }
  }

  /**
   * method to close the modal, you can pass values to this method,
   * they will be emitted by the observable onHide of this service
   * @param hideData
   */
  closeModal(hideData: any): void {
    this.modalService.onHide.emit(hideData)
    this.modalRef?.hide()
  }
}
