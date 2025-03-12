#!/usr/bin/env python
import os
import sys

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'organica_django.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Không tìm thấy Django. Hãy chắc chắn rằng Django đã được cài đặt."
        ) from exc
    execute_from_command_line(sys.argv)
