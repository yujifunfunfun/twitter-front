'use client'

import { memo, useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { DeletePostBtn } from "@/components/atoms/button/DeletePostBtn";

export const DeleteAlertDialog = memo(({postId}: {postId: string}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement | null>(null)
  return (
    <>
      <Button
        colorScheme='red'
        variant='ghost'
        _hover={{ bg: 'none'}}
        onClick={onOpen}
        w='100%'
        justifyContent='flex-start'
      >
        削除
      </Button>

      <AlertDialog
        isOpen={isOpen}
        isCentered
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size='sm'
      >
        <AlertDialogOverlay bg='rgba(91, 112, 131, 0.4)'>
          <AlertDialogContent bg='black'>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              ポストを削除しますか？
            </AlertDialogHeader>

            <AlertDialogBody>
            この操作は取り消せません。プロフィール、あなたをフォローしているアカウントのタイムライン、検索結果からポストが削除されます。
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                キャンセル
              </Button>
              <DeletePostBtn postId={postId} onClose={onClose} />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
})