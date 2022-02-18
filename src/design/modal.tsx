import { Modal as AntdModal } from "antd";
import { ModalFuncProps, ModalProps as AntdModalProps } from "antd/lib/modal";
import { Button } from "antd";
import { ReactNode } from "react";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import IIcon1 from "../components/Ts14ChangeSvg/icons/icon-1.svg";

const ICon1 = styled(SVG)<{ color: string }>`
  height: 26px;
  width: 24px;
  border: 1px solid #ccc;
  cursor: pointer;
  & path {
    fill: ${(props) => props.color};
  }
`;

type ModalWrapperProps = {
  width?: string | number;
};

const ModalWrapper = styled.div<ModalWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : "368px")};
  heigh: fix-content;
  background: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px 16px 16px 16px;
  pointer-events: auto;
`;

const ModalHeaderWrapper = styled.div`
  display: flex;
  align-item: center;
`;

const ModalHeaderTitle = styled.div`
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #222222;
  line-height: 16px;
`;

const ModalCloseIcon = styled.div`
  margin-left: auto;
  width: 16px;
  height: 16px;
  cursor: pointer;
  :hover svg g line {
    stroke: #222222;
  }
`;

const ModalHeaderBackBtn = styled.button`
  height: 16px;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 24px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #4965f2;
  line-height: 16px;
  background: none;
  cursor: pointer;
  svg {
    transform: rotate(-90deg);
    width: 20px;
    height: 20px;
  }
  :hover svg g path {
    fill: #4965f2;
  }
`;

const ModalFooterWrapper = styled.div`
  display: flex;
  justify-content: end;
  button {
    width: 76px;
    height: 28px;
    margin-left: 8px;
  }
`;

function ModalHeader(props: {
  title?: React.ReactNode;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  showBackLink?: boolean;
  onBack?: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <>
      {props.showBackLink && (
        <ModalHeaderBackBtn onClick={props.onBack}>
          {/* <PackUpIcon /> */}
          <span>返回</span>
        </ModalHeaderBackBtn>
      )}
      <ModalHeaderTitle>{props.title}</ModalHeaderTitle>
      <ModalCloseIcon onClick={props.onCancel}>
        <ICon1 color={"#007bff"} src={IIcon1} title="MyLogo" />
        {/* <CloseIcon /> */}
      </ModalCloseIcon>
    </>
  );
}

function ModalFooter(props: {
  okText?: ReactNode;
  cancelText?: ReactNode;
  showCancelButton?: boolean;
  showOkButton?: boolean;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  const { showOkButton, showCancelButton, okText, cancelText, onOk, onCancel } = props;
  return (
    <>
      {showCancelButton && <Button onClick={onCancel}>{cancelText ?? "取消"}</Button>}
      {showOkButton && <Button onClick={onOk}>{okText ?? "确认"}</Button>}
    </>
  );
}

type CustomModalProps = {
  showBackLink?: boolean; // 展示左上角的返回
  onBack?: (e: React.MouseEvent<HTMLElement>) => void;
  showOkButton?: boolean;
  showCancelButton?: boolean;
  children?: JSX.Element | React.ReactNode;
};

const DEFAULT_PROPS = {
  showOkButton: true,
  showCancelButton: true,
  showBackLink: false,
};

function CustomModalRender(props: (CustomModalProps & AntdModalProps) | (CustomModalProps & ModalFuncProps)) {
  return (
    <ModalWrapper width={props.width}>
      <ModalHeaderWrapper>
        <ModalHeader
          title={props.title}
          onCancel={props.onCancel}
          showBackLink={props.showBackLink}
          onBack={props.onBack}
        />
      </ModalHeaderWrapper>
      <div style={props.bodyStyle}>{props.children}</div>
      <ModalFooterWrapper>
        <ModalFooter {...props} />
      </ModalFooterWrapper>
    </ModalWrapper>
  );
}

/**
 * antd modal 封装 自定义弹窗内容样式
 */
function CustomModal(props: CustomModalProps & AntdModalProps) {
  return (
    <AntdModal {...props} width="fit-content" modalRender={() => <CustomModalRender {...DEFAULT_PROPS} {...props} />} />
  );
}

/**
 * 确认对话框
 */
CustomModal.confirm = (props: {
  title: string;
  content: string;
  onConfirm: (e: React.MouseEvent<HTMLElement>) => void;
}): any => {
  const defaultConfirmProps: ModalFuncProps = {
    ...DEFAULT_PROPS,
    okText: "确认",
    cancelText: "取消",
    bodyStyle: {
      fontFamily: "PingFangSC-Regular",
      fontSize: "14px",
      color: "#333333",
      lineHeight: "14px",
      height: "84px",
      marginTop: "40px",
    },
  };
  // 创建model
  const model = AntdModal.confirm({
    width: "fit-content",
  });
  // 增加关闭回调
  model.update({
    maskClosable: true,
    modalRender: () => (
      <CustomModalRender
        {...defaultConfirmProps}
        onCancel={model.destroy}
        children={props.content}
        onOk={(e: React.MouseEvent<HTMLElement>) => {
          props.onConfirm(e);
          model.destroy();
        }}
        title={props.title}
      />
    ),
  });
  return model;
};

export { CustomModal };
