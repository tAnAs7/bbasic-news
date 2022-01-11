import { Col } from "../styles/bodyStyles"
import { WarningBackground, WarningContent, WarningImg, WarningTittle } from "../styles/warningStyles"

export function EarlyAccess () {
    return(
        <WarningBackground>
            <WarningImg src='stamp/early_access.png' alt='stamp'/>
            <Col>
                <WarningTittle>Truy cập sớm</WarningTittle>
                <WarningContent>
                    <span>Nội dung hiện tại đang trong giai đoạn phát triển. </span>
                    <span>Vì thế 1 phần nội dung hoặc giao diện có thể thay đổi (hoặc không) trong tương lai. </span>
                    <span>Mọi ý kiến đóng góp của các bạn sẽ được ghi nhận và góp phần xây dựng nên một phiên bản tốt hơn.</span>
                </WarningContent>
                <WarningContent>
                    <span>Bên dưới là nội dung và thông tin các bản cập nhật. </span>
                </WarningContent>
            </Col>
        
        </WarningBackground>
    )
}