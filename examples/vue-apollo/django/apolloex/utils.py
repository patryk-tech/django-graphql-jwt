from django.conf import settings


def debug_enabled(_):
    """ Simple function to override toolbar callback. """
    return settings.DEBUG

